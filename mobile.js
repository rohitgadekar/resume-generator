

$(document).ready(() => {

  const key = localStorage.getItem('key')
  localStorage.clear()
  fetch('https://api.jsonbin.io/v3/b/64757de38e4aa6225ea66fdc/' + key, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {

      $('body').append(`

    <div id="main">
      <div id="left">
        <div id="image">
          <img src="bg.png" alt="" width="100" />
        </div>
        <div id="personal-box">
          <h1>CONTACT</h1>
          <label>Phone</label>
          <p>${data.record.personal[2].phone}</p>
          <label>email</label>
          <p id="email">${data.record.personal[1].email}</p>
          <label>address</label>
          <p>${data.record.personal[7].address}, ${data.record.personal[8].streetaddress}, ${data.record.personal[9].country}, ${data.record.personal[10].city}, ${data.record.personal[11].landmark}, ${data.record.personal[12].postal}</p>
          <label>dob</label>
          <p>${data.record.personal[3].dob}</p>
        </div>
        <div id="skills-box">
          <h1>EXPERTISE</h1>
          <ul>
           ${data.record.skills.map((i) => {
        return `<li>${i}</li>`
      }).join(' ')}
          </ul>
        </div>
        <div id="language-box">
          <h1>LANGUAGE</h1>
          <ul>
          ${data.record.language.map((i) => {
        return `<li>${i}</li>`
      }).join(' ')}
          </ul>
        </div>
        <div id="links-box">
          <h1>SOCIALS</h1>
          <ul>
            ${data.record.socials.map((i) => {
        return `<li id="email">${i}</li>`
      }).join(' ')}
          </ul>
        </div>
        <div id="links-box">
          <h1>CERTIFICATES</h1>
          <ul>
            ${data.record.certificate.map((i) => {
        return `<li>${i}</li>`
      }).join(' ')}
          </ul>
        </div>
      </div>
      <div id="right">
        <div id="summary">
            <h1>${data.record.personal[0].name}</h1>
            <label>${data.record.personal[4].title}</label>
            <p>${data.record.personal[5].summary}</p>
        </div>
        <div id="experience">
        <h1>EXPERIENCE</h1>
            <hr>
          ${data.record.experience[0].job.map((i, j) => {

        return (`
            <label>${data.record.experience[0].job[j]} | ${data.record.experience[1].company[j]}</label>
            <p>${data.record.experience[2].start[j]}  -  ${data.record.experience[3].end[j]}</p>
            <p id="exp">${data.record.experience[4].desc[j]}</p> `)

      }).join(' ')}
            
        </div>
        <div id="education">
            <h1>EDUCATION</h1>
            <hr>
            ${data.record.education[0].degree.map((i, j) => {

        return (`  
              <label>${data.record.education[0].degree[j]} |  ${data.record.education[1].university[j]}</label>  
              <p id="edu">${data.record.education[2].start[j]} | ${data.record.education[3].end[j]}</p>  
              `)

      }).join(' ')}
           
            
        </div>
        <div id="education">
            <h1>Achievements</h1>
            <hr>
            ${data.record.achievement.map((i) => {
        return `<p>${i}</p>`
      }).join('')}
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="print" id="print">print</button>
    </div>
    `)


      document.getElementById('print').addEventListener('click', () => {
        window.print()
      })
    })


})