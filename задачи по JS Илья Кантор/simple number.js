let max = prompt("max", "");

outnum:  
for ( let num = 3 ; num <= max; num++)
{
	for ( let i = 2; num > i; i++)
	{
		if ( num % i == 0) 
		continue outnum;
	}

alert( num );
}


