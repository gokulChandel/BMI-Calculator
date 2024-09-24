const form = document.querySelector('form');
form.addEventListener('submit',function(e)
{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')
    result.style.color = "#fff"
    if(height === '' || height <= 0 || isNaN(height))
    {  
      result.innerHTML = `<span style="color:red;text-align:center;margin-left:30px " > please give me a valid Height ! ${height}</span>`;
    }
     else if(Weight === '' || Weight <= 0 || isNaN(Weight))
    {  
      result.innerHTML = `<span style="color:red;text-align:center;margin-left:30px " > please give me a valid Weight ! ${Weight}</span>`;
    }
    else
    {
      const Bmi = (Weight/((height*height)/10000)).toFixed(2);
      //show result
      result.innerHTML = `<span style="color:red;text-align:center;margin-left:120px"> ${Bmi}</span>`;
      if(Bmi<18.6)
      {
         result.innerHTML = `Under Weight = less than 18.6 ${Bmi}` ;
      }else if(Bmi>18.6 && Bmi <26.9)
      {
       result.innerHTML = `Normal Weight Range ${Bmi}`;
      }
      else
      result.innerHTML = `Over Weight ${Bmi}`;
    }

});