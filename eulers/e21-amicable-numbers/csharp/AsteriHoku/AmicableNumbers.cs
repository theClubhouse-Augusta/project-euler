//note: check for TODOs if you're looking to use any of this code
//todo sarah run this to be sure

int d(int num){
    var a = 0;
    var max = num;
    var sum = 1;//accounts for 1 as a divisor

    for (var i = 2; i < max; ++i){//starting at 2 to ensure that we do not count the num itself
        a = (num / i);
        if (num % i == 0) {
            sum += i != a ? i + a : i;
            max = num / i;//set max to the larger divisor, shrinks search area
        }
    }

    return sum;	
}

int getAmiNums(int max) {
    var sum = 0;
    for (var i = 1; i < max; ++i){
        var da = d(i);
        if (d(da) == i && da != i){	//ie if d(220) = 284 and 220 != 284
            sum += i + da;			//add the amicable pair numbers
            i = da;					//set index to larger amicable pair, this reduces search area and
                                    //ensures that amicable pair numbers are not double added
        }
    }
    return sum;
}

var int0 = 284;
var int1 = 220;

Console.WriteLine($"Test - d({int0}) should be equal to {int1} - {d(int0) == int1}");
Console.WriteLine($"Test - d({int1}) should be equal to {int0} - {d(int1) == int0}");

var num = 10000;//TODO define your number here
var ans = getAmiNums(num);
Console.WriteLine($"Answer for {num} is {ans}");