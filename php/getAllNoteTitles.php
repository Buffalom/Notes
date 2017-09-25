<?php

$filecontent = "";
$files = scandir('./notes/');

foreach($files as $file) {
  $fileText = split("|*-*|", readfile($file));
  $filecontent .= $fileText[0] . "|*-*|" . $fileText[1] . "|*_*|";
}

return $filecontent;