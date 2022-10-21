    let x = 5,y = 2, z = x + y;
    console.log(z)      

    let a=10;
        a-=3;
    console.log(a); 

    let b=3;
        b**=3;
    console.log(b);  

    //......arithematic operator.........
    let n1=10;
        n2=5;
    console.log(n1+n2);  

    let  numa=114;
        numb=14;
    console.log(numa-numb);  

    let numc=150;
        numd=5  ;
    console.log(numc/numd);  

    //----increment---(pre-++a methode, post-a++ methode)
    let w=10;
    console.log(++w);
    console.log(++w);
    console.log(w);  //pre..++a.....1

    let  g=100;
    console.log(g++);
    console.log(g++);
    console.log(g);  //post..a++.......2

    //--------------------decrement------------(pre...--a methode, post...a--methode)
    let h=5;
    console.log(--h);
    console.log(--h);
    console.log(h);  //pre..--a

    let i=8;
    console.log(i--);
    console.log(i--);
    console.log(i);  //post..a--

    //......comparison operator......
    let j=6;
        k=5;
    console.log(j==k);      //equal
    console.log(j===k);     //strict equal
    console.log(j!=k);      //not equal
    console.log(j!==k);     //not equal value
    console.log(j>k);       //greater
    console.log(j<k);       //lessthan
    console.log(j>=k);      //grreter than or equal
    console.log(j<=k);      //less than or equal

    let age=17;
    let vote= age>=18 ? "eligible":"not eligible";
    console.log(vote);          //ternary operator

    let ages=18;
    let votes= ages>=18 ? "eligible":"not eligible";
    console.log(votes);

    //....logigal operator......Three Types...
    let s=5;
        t=6;
        u=8;
        v=4;
        w=9;
    console.log((s>t)&&(u>v));   //.. &&and

    console.log((s>t)||(u<w));    //..||or

    console.log(!(s>t)||(u<w));  //oposite aah varum...\..!not