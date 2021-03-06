#!/bin/bash

############################### Welcome To Shell Scripting File #################################
#################################################################################################
############################### Initial Stages of Getting Started ###############################
### touch myscript.sh

### ls -ltr
### chmod +x myscript.sh

### ./myscript.sh
### sh myscript.sh

### which bash
### which $SHELL
#################################################################################################
#################################################################################################


#################################################################################################
############################### ECHO COMMAND ####################################################
# echo Hello World!
#################################################################################################
############################### VARIABLES #######################################################
## Uppercase by convention - Letters, numbers, underscores ### ----------------------------------
# NAME="Brad"
# echo "My name is $NAME"
# echo "My name is ${NAME}"

# echo "My name is $NAME _cccc"
# echo "My name is ${NAME}_cccc"

## Numbers ### ------------------------------------------------------------------------------------
# number=10
# number=$( expr $number + 1)
# echo "The Number Is ${number}"

# number=10
# ((number++))
# echo "The Number Is ${number}"

## Variables Scope ### ----------------------------------------------------------------------------
## --------------------------- ##################################### ------------------------------
### ./myscript.sh name age
### ./myscript.sh "Alex"

### export name="ALex"
### ./myscript.sh

### ./myscript.sh
### . ./myscript.sh
## --------------------------- ##################################### -----------------------------
# echo "My name is $NAME2"
# NAME2="Brad"
# echo "My name is $NAME2"
#################################################################################################
############################### USER INPUT ######################################################
# read -p "Enter your name: " NAME
# echo "Hello $NAME, nice to meet you!"
### ---------------------------------------------------------------------------------------------
# echo "Enter your name: "
# read NAME
# echo "Hello $NAME, nice to meet you!"
#################################################################################################
############################### IF , IF-ELSE , ELSE-IF (elif) ###################################
## --------------------------- ##################################### ---------------------------
### && (And)
### || (Or)
## --------------------------- ##################################### ---------------------------
# NAME="Brad"
# if [ "$NAME" == "Brad" ]
# then
#   echo "Your name is Brad"
# elif [ "$NAME" == "Jack" ]
# then  
#   echo "Your name is Jack"
# else 
#   echo "Your name is NOT Brad or Jack"
# fi
### ---------------------------------------------------------------------------------------------
# NAME="Brad"
# if [ "$NAME" == "Brad" ]; then
#   echo "Your name is Brad"
# else 
#   echo "Your name is NOT Brad or Jack"
# fi
### ---------------------------------------------------------------------------------------------
# NAME="Brad"
# if [[ ("$NAME" == "Brad") || ("$NAME" == "Bred Traversy") ]]; then
#   echo "Your name is Brad"
# else 
#   echo "Your name is NOT Brad"
# fi
### ---------------------------------------------------------------------------------------------
# NAME="Brad"
# [ "$NAME" == "Brad" ] && echo "Your name is Brad"
# [ "$NAME" == "Brad" ] && echo "Your name is Brad" || echo "Your name is NOT Brad"
#################################################################################################
############################### COMPARISON ######################################################
## --------------------------- #################################### ---------------------------
### val1 -eq val2 [==] Returns true if the values are equal
### val1 -ne val2 [!=] Returns true if the values are not equal
### val1 -gt val2 [>] Returns true if val1 is greater than val2
### val1 -ge val2 [>=] Returns true if val1 is greater than or equal to val2
### val1 -lt val2 [<] Returns true if val1 is less than val2
### val1 -le val2 [<=] Returns true if val1 is less than or equal to val2
## --------------------------- #################################### ---------------------------
# NUM1=31
# NUM2=5
# if [ "$NUM1" -gt "$NUM2" ]
# then
#   echo "$NUM1 is greater than $NUM2"
# else
#   echo "$NUM1 is less than $NUM2"
# fi
#################################################################################################
############################### FILE CONDITIONS #################################################
## --------------------------- ################################################## ---------------------------
### -d file   True if the file is a directory
### -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
### -f file   True if the provided string is a file
### -g file   True if the group id is set on a file
### -r file   True if the file is readable
### -s file   True if the file has a non-zero size
### -u    True if the user id is set on a file
### -w    True if the file is writable
### -x    True if the file is an executable
## --------------------------- ################################################## ---------------------------
# FILE="test.txt"
# if [ -e "$FILE" ]
# then
#   echo "$FILE exists"
# else
#   echo "$FILE does NOT exist"
# fi
#################################################################################################
############################### CASE STATEMENT ##################################################
# read -p "Are you 21 or over? Y/N " ANSWER
# case "$ANSWER" in 
#   [yY] | [yY][eE][sS])
#     echo "You can have a beer :)"
#     ;;
#   [nN] | [nN][oO])
#     echo "Sorry, no drinking"
#     ;;
#   *)
#     echo "Please enter y/yes or n/no"
#     ;;
# esac
### -----------------------------------------------------------------------------------------------
# echo "Enter Number: "
# read number
# case $number in 
#   1) echo "You Enter One"
#       ;;
#   2) echo "You Enter Two"
#       ;;
#   *) echo "You Enter Other Number"
#       ;;
# esac
#################################################################################################
############################### FOR LOOP ########################################################
## SIMPLE FOR LOOP ### --------------------------------------------------------------------------
# for i in {1..4}
#   do
#     echo "Num: $i"
# done
### -----------------------------------------------------------------------------------------
# for i in 1 10 30 50
#   do
#     echo "Num: $i"
# done
### -----------------------------------------------------------------------------------------
# NAMES="Brad Kevin Alice Mark"
# for NAME in $NAMES
#   do
#     echo "Hello $NAME"
# done
### ------------------------------------------------------------------------------------------
# for i in *
#   do
#     echo "File is: ${i}"
# done
### ------------------------------------------------------------------------------------------
# for i in {1..100}
#   do
#       if [[ ("$i" -ge "10") ("$i" -le "50") ]]
#       Then
#           echo "Num: $i"
#       fi
# done
## Continue ### -------------------------------------------------------------------------------
# for i in {1..100}
#   do
#       if [[ "$i" -ge "5" ]]: Then
#           continue
#       fi
#       echo "Num: $i"
# done
# echo "Done"
## Break ### ----------------------------------------------------------------------------------
# for i in {1..100}
#   do
#       if [[ "$i" -ge "5" ]]: Then
#           break
#       fi
#       echo "Num: $i"
# done
# echo "Done"
## FOR LOOP TO RENAME FILES ### ----------------------------------------------------------------
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES  
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done
#################################################################################################
############################### WHILE LOOP - READ THROUGH A FILE LINE BY LINE ###################
# while read line
#   do
#     echo $line
# done < "profile.txt"
# echo $line
### ---------------------------------------------------------------------------------------------
# LINE=1
# while read -r CURRENT_LINE
#   do
#     echo "$LINE: $CURRENT_LINE"
#     ((LINE++))
# done < "./new-1.txt"
#################################################################################################
############################### FUNCTION ########################################################
## --------------------------- ##################################### ----------------------------
# $@
# $#
# $$
# $?
## --------------------------- ##################################### ----------------------------
# function sayHello() {
#   echo "Hello World"
# }
# sayHello
### ---------------------------------------------------------------------------------------------
# function greet() {
#   echo "Hello, I am $1 and I am $2"
#   echo "Summer all params: $@"
#   echo "Number params: $#"
# }
# greet "Brad" "36"
### ---------------------------------------------------------------------------------------------
# echo "ProcessID: $$"
# echo "Passed to script: $?"
#################################################################################################
############################### CREATE FOLDER AND WRITE TO A FILE ###############################
# mkdir hello
# touch "hello/world.txt"
# echo "Hello World" >> "hello/world.txt"
# echo "Created hello/world.txt"
#################################################################################################
############################### Write to File ###################################################
# rm -rf users.txt
### read username ## -------------------------------
# while [[ "$username" != "" ]]
#   do
#     echo $username >> users.txt 
#     read $username 
# done
### Read from File ## -----------------------------
# echo "User Name List:"
# while read line
#   do
#     echo $line
# done < users.txt
# echo $line
### -----------------------------------------------------------------------------------------------
# cat <<EDF > users.Defult
# jana
# laya
# hussein
# EDF
# cat users.Defult
