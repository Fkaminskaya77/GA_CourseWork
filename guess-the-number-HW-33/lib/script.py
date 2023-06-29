import random

def guess_num():

    num = random.randint(1, 100)
    guess = None

    while guess !=num:
        guess = int(input("Guess a number between 1 and 100: "))
    
        if guess < num: 
            print("Too low, Try again!")
        elif guess > num:
            print('Too high, Try again!')
        else:   
            print("Yay! You guessed the number!")
    
    play_again = input("Would you like to play again? Yes (y) or No (n): ")
    if play_again.lower() == "y":
        guess_num()
    else:
        print("Thank you for playing! Goodbye!") 
guess_num()
