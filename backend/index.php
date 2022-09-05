<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: GET, POST, DELETE");

  // Pega o array de dois em dois elementos e os associa, exemplo:
  // Input: [1, 2, 3, 4]
  // Output: [{timestamp => 1, content => 2}, {timestamp => 3, content => 4}]
  function formatResponse($array) {
    $formattedResponse = array();

    for ($i = 0; $i < count($array); $i += 2) {
      if ($i === count($array) - 1) return;
      
      /* Para criar um objeto com valores, em javascript seria `{key: value}`. 
      Em PHP é `[key => value]`. */
      array_push($formattedResponse, 
        [
          "timestamp" => $array[$i],
          "content" => $array[$i + 1]
        ]
      );
    }

    return $formattedResponse;
  }

  function handleGetRequest($conn) {
    $selectAllFromMessagesQuery = "SELECT * FROM messages";
    $result = mysqli_query($conn, $selectAllFromMessagesQuery);
    
    // As mensagens do db serão adicionadas a este array
    $messages = array();

    while ($row = mysqli_fetch_assoc($result)) {
      foreach ($row as $value) { // $row as $field => $value
        array_push($messages, $value);
      }
    }

    $formattedResponse = formatResponse($messages);
    echo json_encode($formattedResponse);
  }

  function handlePostRequest($conn) {
    $json = json_decode(file_get_contents("php://input"));
    
    mysqli_query($conn,
      "INSERT INTO messages (timestamp, message) 
      VALUES (\"{$json->timestamp}\", \"{$json->message}\");"
    );
    
    http_response_code(200);
  }

  function handleDeleteRequest($conn) {
    $requestJson = json_decode(file_get_contents("php://input"));
    
    mysqli_query($conn,
      "DELETE FROM messages 
      WHERE timestamp=\"{$requestJson->timestamp}\" 
      AND message=\"{$requestJson->content}\""
    );

    http_response_code(200);
  }

  // É preciso configurar o banco de dados para ouvir neste host
  // /etc/mysql/mysql.conf.d/mysqld.cnf
  // Mudar o bind-address (se colocar 0.0.0.0 ele ouve em qualquer endereço)
  // Após isso, reiniciar o mysql no terminal: service mysql restart
  $servername = "localhost:3306";

  // É preciso dar permissões pra este usuário
  /*
    mysql> CREATE USER 'root'@'localhost' IDENTIFIED BY 'some_pass';
    mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost'
        ->     WITH GRANT OPTION;
  */
  $username = "root";
  $password = "senhaforte";
  $dbname = "open_chat";

  // Conectando no banco de dados
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Executando a query no db
  mysqli_query($conn, 
    "CREATE TABLE IF NOT EXISTS messages(
      timestamp VARCHAR(50) PRIMARY KEY,
      message VARCHAR(800)
    )"
  );

  switch ($_SERVER["REQUEST_METHOD"]) {
    case "GET":
      handleGetRequest($conn);
      break;
    case "POST":
      handlePostRequest($conn);
      break;
    case "DELETE":
      handleDeleteRequest($conn);
      break;
  }
?>