from capitals import states
import random

def game():
    print("Hello there! How well do you know the geography of the United States? ")
    print(f"You will be guessing {len(states)} states. Let's begin!\n")
    print("SIDENOTE: If you would like to quit the game at any time you can type quit") 
    
        
    random.shuffle(states)
    
    correct = 0
    incorrect = 0
 
    for i in states:
        print("What is the capital of " + i["name"] + "? ")
        response = input("capital: ")
        
        if response.lower() == "quit":
            print("You have quit the game.")
            break
        
        if response.lower() == i["capital"].lower():
           print("correct!")
           correct += 1
    else:
        print("incorrect. The capital of", i["name"], "is", i["capital"])
        incorrect += 1
        
    print("Score: correct =", correct, " incorrect =", incorrect, "\n")
    
    play_again = input("Would you like to play again? Yes (y) or No (n): ")
    if play_again.lower() == "y":
        game()
    else:
        print("Thank you for playing my game! Goodbye!") 

game()