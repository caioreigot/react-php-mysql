<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: GET, POST, DELETE");

  function handleGetRequest($conn) {
    $selectAllFromMessagesQuery = "SELECT * FROM messages";
    $result = mysqli_query($conn, $selectAllFromMessagesQuery);
    
    // As mensagens do db serão adicionadas a este array
    $messages = array();

    while ($row = mysqli_fetch_assoc($result)) {
      array_push($messages, $row);
    }

    echo json_encode($messages);
  }

  function handlePostRequest($conn) {
    $json = json_decode(file_get_contents("php://input"));

    if (empty($json->content)) {
      http_response_code(406);
      die();
    }
    
    mysqli_query($conn,
      "INSERT INTO messages(
        timestamp,
        sender,
        nicknameColor,
        content
      )
      
      VALUES(
        '{$json->timestamp}',
        '{$json->sender}',
        '{$json->nicknameColor}',
        '{$json->content}'
      );"
    );
    
    http_response_code(200);
  }

  function handleDeleteRequest($conn) {
    $requestJson = json_decode(file_get_contents("php://input"));
    
    mysqli_query($conn,
      "DELETE FROM messages 
        WHERE timestamp='{$requestJson->timestamp}'
        AND content='{$requestJson->content}'"
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
      timestamp VARCHAR(50),
      sender VARCHAR(50),
      nicknameColor CHAR(20),
      content TEXT
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