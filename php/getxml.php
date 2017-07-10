<?php

$newsname = './news.xml';

if (file_exists($newsname)) {
    echo "";
} else {
  set_time_limit(0);
  $link="https://www.kommersant.ru/RSS/corp.xml";
  $name="news.xml";
  if(@$data = file_get_contents($link)){
  echo "";
  }else{
  echo "no data could be loaded";
  }
  $file = fopen($name,'w');
  fwrite($file,$data); //и сохраним его
  fclose($file);
}
?>
