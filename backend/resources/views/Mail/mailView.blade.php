<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        .container{
            width: 100%;
            height: 500px;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center !important;
            padding-top: 20px;
        }
        .container .content{
            height: 100px;
            width: 400px;
            background-color: white;
            font-family: 'source sans pro';
            padding: 20px;
        }
        .content hr{
            background: #f0f0f0;
            border: none;
            height: 2px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class='content'>
            <h2>Reset your password</h2>
            <hr>
            <p>
                Your Password Is :
                <b>{{$password}}</b>
            </p>
        </div>
    </div>

</body>
</html>