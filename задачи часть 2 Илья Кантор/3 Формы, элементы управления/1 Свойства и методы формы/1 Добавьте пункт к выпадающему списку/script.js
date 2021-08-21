let genres = document.getElementById('genres');
let option = document.createElement('option');
option.innerHTML = 'Вегетрианский прогрессив грайндкор';
option.value = 'vegancore'
option.selected = true
genres.append(option)

let newOption = new Option('Классика', 'classic')
genres.append(newOption)