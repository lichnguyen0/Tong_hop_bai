
function kiemTra(){
    let kiemtra = parseInt(document.getElementById("nhapSo").value);
    if( kiemtra>=0){
        document.write( "số " + kiemtra + " là số dương.");
    }else{
        document.write(kiemtra + " là số âm.");
    }
}


