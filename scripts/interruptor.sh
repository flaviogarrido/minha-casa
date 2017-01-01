#!/bin/bash

estado=$(gpio read $1)

gpio mode $1 out
if [ $estado = "0" ]; then
	gpio write $1 1
elif [ $estado = "1" ]; then
	gpio write $1 0
fi

