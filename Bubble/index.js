function shuffle(array) {//Перемешиваем числа в списке
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }



function sort(list){
    let result = [...list];//Копируем наш список 
    for (let j = 0; j < result.length; j ++){ //Перемещение всех чисел
        for (let i = 0; i < result.length - 1; i++){//Перемещение одного числа
            if (result[i] > result[i+1]){
                let temp = result[i];
                result[i] = result[i+1];// Меняем два числа местами(большее - вперед, меньшее - назад)
                result[i + 1] = temp;
            }
        }
    }
    return result;//Возвращаем результат
  }
 
var unsorted_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
console.log('До сортировки пузырьком',shuffle(unsorted_list));
console.log('После сортировки пузырьком',sort(unsorted_list));