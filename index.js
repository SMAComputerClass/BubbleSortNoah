//'use strict';
// Enter your js code Here

var a = new Array;
var b = new Array;
var c = new Array;

a = [1,2,3,4,5,6,7,8,9,10];
b = [11,12,13,14,15,16,17,18,19,20];

var aPointer = 0;
var bPointer = 0;

var finished = false;
var i;

var counter = 0;

while (finished == false)
{
    if (a[aPointer] < b[bPointer])
    {
      counter++;
      c.push(a[aPointer]);
      aPointer++;
    }
    else
    {
      counter++;
      c.push(b[bPointer]);
      bPointer++;
    }

    if (aPointer == a.length)
    {
      for (i=bPointer; i < b.length; i++ )
      {
        c.push(b[bPointer++]);
        finished = true;
      }
    }

    if (bPointer == b.length)
    {
      for (i=aPointer; i < a.length; i++ )
      {
        c.push(a[aPointer++]);
        finished = true;
      }
    }

}

alert (c);
alert (counter + " operations");
