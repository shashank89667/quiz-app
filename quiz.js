const questions=[{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'What year was JavaScript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1993',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does CSS stands for?',
    'a':'Hypertext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'Helicopters Terminals Motoboats Lamborginis',
    'correct':'b',
}
]
let index=0;
let total=questions.length;
let right=0,
    wrong=0;
const quesBox=document.getElementById("quesBox")
const optioninput=document.querySelectorAll('.options')
const loadquestion = () =>{
    if(index===total){
    return endquiz()}
    reset();
    const data=questions[index];
    console.log(data)
    quesBox.innerText= `${index+1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}
const submitquiz=()=>{
    const data=questions[index];
    const ans=getanswer()
    if(ans==data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer = () =>{
    let answer;
    optioninput.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
        }}
    )
    return answer;
}
const reset = () =>{
    optioninput.forEach(
        (input) =>{
            input.checked=false;
        }
    )
}
const endquiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>`
}
loadquestion();