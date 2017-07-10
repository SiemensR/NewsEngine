<?php

$newsname = '../meduzanews.xml';

if (file_exists($newsname)) {
    exit();
} else {
  set_time_limit(0);
  $link="https://meduza.io/rss/all";
  $name="meduzanews.xml";
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
