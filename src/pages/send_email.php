<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Debug: Log the raw POST data
    error_log("Raw POST data: " . file_get_contents("php://input"));
    error_log("POST array: " . print_r($_POST, true));

    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $number = isset($_POST['number']) ? trim($_POST['number']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Debug: Log the processed data
    error_log("Processed data - Name: $name, Number: $number, Email: $email, Message: $message");

    // Validate inputs
    if (empty($name) || empty($number) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Missing required fields.',
            'received' => [
                'name' => $name,
                'number' => $number,
                'email' => $email,
                'message' => $message
            ]
        ]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid email format.'
        ]);
        exit;
    }

    // Sanitize inputs
    $name = htmlspecialchars($name);
    $number = htmlspecialchars($number);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    $to = "dragoop2183@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\n";
    $body .= "Phone Number: $number\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    try {
        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Email sent successfully!'
            ]);
        } else {
            throw new Exception('Failed to send email');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send email: ' . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
}
?>