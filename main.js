const linksSocialMedia = {
  github: 'maykbrito',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks (){
 for (let li of socialLinks.children){
   const social = li.getAttribute('class')

 li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

 }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfileInfos()

      //camelCase     PascalCase     snake_case formas de nomear uma funcão ou variavel, cada empresa tem a sua. não pode ter espaço no nome.

      // forma primitiva do for
      //function changeSocialMediaLiks (){
       //for (let i = 0; i <=2; i++){
         //alert(i)
      //}


      // ser humano le 12345678910 
      // maquina ou cmputador começa pelo 0 - 0123456789

      //ARROW FUNCTIONS
      //function nomedafuncao(argumentos){
        //code
     // }
      //mesma coisa que
     // argumento => {

      //}
      //function nomedafuncao(argumento1, argumento2){
        //code
     // }
      //mesma coisa que
     // (argumento1 , argumento2) => {
        
     // }