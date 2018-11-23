<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 25.09.18
 * Time: 09:03
 */
$data = json_decode(file_get_contents("php://input"));

//$mysqli = new mysqli("localhost", "kasparjakobson", "yUfTGU7Qb9fU", "kasparja_oepperakendus");
$mysqli = new mysqli("localhost", "root", "", "oepperakendus");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!($stmt = $mysqli->prepare("insert into sent_emails (email_fullname, email_address, email_body) values 
(?, ?, ?) "))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$stmt->bind_param("sss", $data->email_fullname, $data->email_address, $data->email_body)) {
    return "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

if (!$stmt->execute()) {
    return "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}
