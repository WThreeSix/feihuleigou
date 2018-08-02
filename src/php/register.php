<?php
    header("content-type:text/html; charset=utf-8");
    $uname = $_POST["user"];
    $upwd = $_POST["password"];
    $uemail = $_POST["email"];
    $upeople = $_POST["people"];
    $ucode = $_POST["code"];
    $usecurity = $_POST["security"];
    $db = mysql_connect("localhost","root","root");
    mysql_select_db("db1808a",$db);
    mysql_query("set names utf-8");
    $sql1 = "SELECT * FROM `user` WHERE username='$uname'";
    $set = mysql_query($sql1);
    $arr = mysql_fetch_array($set);
    if($arr){
    	echo "注册失败，该用户名已被注册！";
    }else{
    	$sql = "INSERT INTO `user`(`username`,`password`,`email`,`people`,`code`,`security`) VALUES ('$uname','$upwd','$uemail','$upeople','$ucode','$usecurity')";
    	$row = mysql_query($sql);
    	if($row){
        	echo "注册成功";
    	}else{
        	echo "注册失败，数据库服务错误。";
    }
    }
    
    

