<?php
    header("content-type:text/html; charset=utf-8");
    $uname = $_POST["user"];
    $upwd = $_POST["password"];
    $db = mysql_connect("localhost","root","root");
    mysql_select_db("db1808a",$db);
    mysql_query("set names utf-8");
    $sql = "SELECT * FROM `user` WHERE username='$uname'";
    $set = mysql_query($sql);
    $arr = mysql_fetch_array($set);
    print_r($arr);
    if($uname == $arr['username']){
        if($upwd == $arr['password']){
            echo "<script> alert('登录成功');window.location = '../index.html';</script>";
        }else{
            echo "<script> alert('密码错误');window.location = '../login.html';</script>";
        }
    }else{
        echo "<script> alert('用户名不存在');window.location = '../login.html';</script>";
    }