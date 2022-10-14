const Links={
  github: 'rssantos07',
  instagram: 'rssantos17',
  facebook: 'maykbrito',
  twitter: 'jakelinytec',
  youtube: 'maykbrito'
}

// function ChangeName () {
//   // document.getElementById('userName').textContent = 'Rodrigo Santos' ou
//   userName.textContent ="Rodrigo Santos"
// }
// ChangeName ()
function changeSocialLinks (){
  for (let li of socialLinks.children) {
    const social = (li.getAttribute('class'))
      li.children[0].href =`https://www.${social}.com/${Links[social]}`

  }
}

changeSocialLinks ()

function getGitHubProfileInfos (){
  const url = `https://api.github.com/users/${Links.github}`
  
  fetch(url)
  .then(response =>response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent=data.login
  })
  
}

getGitHubProfileInfos ()

