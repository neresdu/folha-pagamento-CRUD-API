<div style="display: inline_block">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="40" width="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="40" width="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="40" width="40"/>

</div>
          
          
Microservice REST API exemple using Node and TypeScript. Based on MVC architecture<br>

1 Application: (CRUD_Payrolls) is reponsable to register and calculate payrolls<br>
2 Application: (Search_Payrolls) is responsable only to list all payrolls or just one specific.<br>

Steps to run server application for each application:<br>
<ul>
  <li>npm install</li>
  <li>npm install -g typescript</li>
  <li>npm run dev</li>
</ul>


<br><br>

Example to register payroll:<br>
![image](https://user-images.githubusercontent.com/58155653/180092293-cd86e196-5399-4e69-b91a-fe8006f8597a.png)
![image](https://user-images.githubusercontent.com/58155653/180092244-34f3c061-859b-4847-b610-975a63ab1076.png)<br><br>

Calcule will return just the number of payrolls processed<br>
![image](https://user-images.githubusercontent.com/58155653/180091706-a1141089-2c13-46d9-8ae4-df7ce5d32287.png)
![image](https://user-images.githubusercontent.com/58155653/180091825-f4da5696-383c-42f3-8e97-8b2c050c6da2.png)
![image](https://user-images.githubusercontent.com/58155653/180092397-ce27d62a-938f-4860-b3db-3b39c7b28dd9.png)<br>
(Payroll processed example)<br><br>
Here we have to routes to search, the first one will list all the processed payrolls and the second one will search by month, year and cpf<br>
![image](https://user-images.githubusercontent.com/58155653/180092497-b99fc09f-d4b7-4078-99c5-1b518d73c579.png)
