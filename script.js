let data = {};
data['koko'] = { id: '847840244279935017', score: 71 };
data['ginnoon'] = { id: '1314490478154092571', score: 70 };
data['sauber'] = { id: '759320895386550303', score: 57 };
data['savant garde'] = { id: '814749670617120788', score: 63 };
data['gun8'] = { id: '1180792260099588162', score: 61 };
data['orca'] = { id: '1324747702399008863', score: 49 };
data['kong'] = { id: '1099580264868479058', score: 59 };
data['Kws_Gbb'] = { id: '1179420028517499002', score: 61 };
data['PIXMIN'] = { id: '965252483855310868', score: 48 };
data['KOREA MONSTER'] = { id: '1127095415985160245', score: 60 };
data['JONG WON KIM'] = { id: '985443382300123147', score: 38 };
data['NOALA'] = { id: '1285606809297752147', score: 43 };
data['i merry'] = { id: '927177144868700200', score: 59 };
// data['max verstappen'] = { id: 'https://i.pinimg.com/736x/29/a7/97/29a797972ea730a4ff4b26855e6afa3f.jpg', score: 100 };

data = Object.fromEntries(Object.entries(data).sort((a, b) => {
  return b[1].score - a[1].score;
}));

window.onload = () => {
  let table = document.querySelector('.table');
  for (const key in data) {
    const driver = document.createElement('div');
    driver.classList.add('driver');
    var s = data[key]['score'];
    var color =  s >= 90 ? '#ff8000' : s >= 80 ? '#ff00ff': s >= 70 ? '#ff0000' : s >= 60 ? 'url(#linearColors)' : s >= 50 ? '#ffc000' : s >= 40 ? '#0080ff' : '#c0c0c0';
    driver.innerHTML = `<img src="https://avatar-cyan.vercel.app/api/pfp/${data[key]['id']}/image?size=256&format=webp"><p>${key.toUpperCase()}</p><h1>${data[key]['score']}</h1><svg viewBox="0 0 18 24"><polygon points="0,0 18,0 18,15 9,24 0,24" fill="transparent" stroke="${color}" stroke-width="8" vector-effect="non-scaling-stroke"></polygon></svg>`
    if (key.length > 7) driver.querySelector('p').classList.add('long');
    if (data[key]['score'].toString().length > 2) driver.querySelector('h1').classList.add('long');
    
    table.appendChild(driver);
  }

  let popup = document.querySelector('.detail');
  function pop(event) {
    if (popup.style.display == 'flex') {
      popup.style.display = 'none';
    } else {
      document.querySelector('.detail .driver').innerHTML = event.currentTarget.innerHTML;
      popup.style.display = 'flex';
    }
  }
  popup.addEventListener('click', pop);
  document.querySelectorAll('.driver').forEach(item => {
    item.addEventListener('click', pop);
    console.log(item)
  });
}