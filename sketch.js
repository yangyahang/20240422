function setup() {
  createCanvas(windowWidth,windowHeight);
  inputElement=createInput("(╬▔皿▔)╯")
  inputElement.position(width/4,50)
  inputElement.style("font-size","50px")//設定文字大小
  inputElement.style("color","#001524")
  inputElement.style("background","#ff7d00")
  inputElement.style("width","50%")
  inputElement.style("border","6px solid #720026")//border 属性可以修改 input 边框的大小或颜色
  inputElement.style("border-radius","25px")//border-radius 属性可以给 input 添加圆角

  slideElement=createSlider(10,50,20,1)//min10,max50,start from20,
  slideElement.position(width/4,150)
  slideElement.style("width","50%")

  buttonElement=createButton("✪ ω ✪")//按鈕
  buttonElement.position(width*4/5,50)
  buttonElement.style("color","#001524")
  buttonElement.style("background","#ff7d00")
  buttonElement.style("width","7%")
  buttonElement.style("border","3px solid #720026")
  buttonElement.style("border-radius","25px")
  buttonElement.mousePressed(f1)

  colorselectElement=createColorPicker("#15616d")//預設顏色
  colorselectElement.position(width*4/5,100)
  colorselectElement.style("border-radius","25px")
  colorselectElement.style("border","3px solid #720026")
}


function draw() {
  background("#ffecd1");
  txts=inputElement.value()//顯示的文字
  txt_width=slideElement.value()
  textSize(txt_width)
  fill(colorselectElement.value())
  textlength=textWidth(txts)+10
  for(x=0;x<width;x=x+textlength){
    for(y=225;y<height;y=y+txt_width+25){
      text(txts,x+random(randomvalue,-randomvalue),y+random(randomvalue,-randomvalue))
    }
  }
}

var randomvalue = 0;

function f1() {
    if (randomvalue === 0) {
        randomvalue = 10;
    } else {
        randomvalue = 0;
    }
}
