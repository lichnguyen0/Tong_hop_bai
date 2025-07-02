
    var a = [
    ["1", "Nguyen Van To", "1/1/90", "hn", 5000000, "tho"],
    ["2", "Le van Quoc", "5/3/85", "dn", 6000000, "to truong"],
    ["3", "Nguyen Van Viet", "7/7/92", "sg", 5500000, "tho"],
    ["3", "Nguyen Hoang Nam", "7/7/92", "sg", 5500000, "tho"]
    ]


    for(i=0;i<a.length-1;i++)
    for(j=i+1;j<a.length;j++)
    if(a[i][1] > a[j][1]){
    tmp=a[i]
    a[i]=a[j]
    a[j]=tmp
}

    // hien thi bang
    h = "<table border=1>"
    h += "<tr><td>STT</td><td>Ten</td><td>Ngay sinh</td><td>Dia chi</td><td>Luong</td><td>Chuc vu</td></tr>"

    for(i=0;i<a.length;i++){
    h += "<tr>"
    for(j=0;j<6;j++){
    h += "<td>"+a[i][j]+"</td>"
}
    h += "</tr>"
}

    h += "</table>"
document.getElementById("danhsach").innerHTML = h

