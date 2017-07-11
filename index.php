<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>News engine for brains!</title>

    <!-- Bootstrap -->
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <?php include("php/getxml.php"); ?>
    <?php include("php/getmeduza.php"); ?>
      <div class="container">
        <div class="page-header">
      <h1>Latest news<small><br/>Click any news button to continue</small></h1>
    </div>
    <br/><br/>
    <button type="button" onclick="loadDoc()" id="kom">News Kommersant.ru</button>
    <button type="button" onclick="location.reload()"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span></button><br/><br/>
    <button type="button" onclick="loadDocMeduza()">News Meduza.io</button>
    <br><br>
    <table id="demo"></table>

  </div>

<!--
if image is in xml then show it in the table in td td
 -->


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
<!--  <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>-->
<script src="js/main.js"></script>

  </body>
</html>
