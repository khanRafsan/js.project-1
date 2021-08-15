// function myDisplayer(some){
//      console.log("some")

// }
// function myFirst(){
//      myDisplayer("hello")
// }
// function mySecond(){
//      myDisplayer("Goodbye")
// }
// myFirst();
// mySecond();

// function myDisplayer(some){
//      console.log(some)
// }
// function myCalculator(num1,num2){
//      let sum =num1+num2;
//      return sum;
// }
// let result =myCalculator(5,5);
// myDisplayer(result);

// function myDisplayer(some){
//      console.log(some)
// }

// function myCalculator(num1,num2){
//      let sum=num1+num2;
//      myDisplayer(sum)
// }
// myCalculator(5,5)


// *Asynchronus
// const dataLoading=()=>{
//      console.log("tase.dataLoading")
// }


     // setTimeout(dataLoading,2000)
// setTimeout(() => {
// console.log("hello")     
// },2000);



// document.getElementsByTagName("h1").style.background="red"
// for (const h1 of blogTittles) {
//      console.log(h1.innerHTML)
// }

// document.getElementById("button-1").addEventListener("click",function(){
//      document.body.style.backgroundColor="black"
// })

// module-5

// const commentButton=document.getElementById("comment-button").addEventListener('click',function(){

//      const commentBox=document.getElementById("comment-box")


//      // const userComment=commentBox.Value;
// const newComment=document.createElement("p")

// newComment.innerText=commentBox.value
// const commentContainer=document.getElementById("comment-container")

// commentContainer.append(newComment);
// commentBox.value=''

// })


// const commentButton=document.getElementById("comment-button").addEventListener('click',function(){
// const commentBox=document.getElementById("comment-box")


// const newComment=document.createElement("p")
// newComment.innerText=commentBox.value

// const commentContainer=document.getElementById("comment-container")

// commentContainer.append(newComment)

 
// })


// const deleteBtn=document.getElementById("delete-btn").addEventListener('click',function(){
// document.getElementById("heading-1").style.display="none"

// })
// const inputBox =document.getElementById("input-box").addEventListener('keyup',function(event){
// const deleteBtn=document.getElementById("delete-btn")
//      if(event.target.value=="delete"){
// deleteBtn.removeAttribute("disabled")
// }
// else{
//      deleteBtn.setAttribute("disabled",true)
// }

// })
// const buttonDelete=document.getElementById("input-box").addEventListener("keyup",function(event){
// const deleteButton=document.getElementById("delete-bnt")
// if(event.target.value=="delete"){

//      deleteButton.removeAttribute("disabled")
// }
// else{
//      deleteButton.setAttribute("disabled",true)
// }
// })
const para=document.querySelectorAll("p")
for (const iterator of para) {
     iterator.style.color="Blue"
}

const changeColor=document.getElementById("changeColor").addEventListener('click',function(){
   const fixBack= document.body.style.backgroundColor
if(fixBack=="red"){
     document.body.style.backgroundColor="blue" 
}
else{
     document.body.style.backgroundColor="red"
}
})