# Write your code here!
class Member:
    def __init__(self, full_name):
        self.full_name = full_name
        
    def introduce(self):
        print(f"Hello, my name is {self.full_name}!")

class Student(Member):
    def __init__(self, full_name, reason):
        super().__init__(full_name)
        self.reason = reason

class Instructor(Member):
    def __init__(self, full_name, bio):
        super().__init__(full_name)
        self.bio = bio
        self.skills = []

    def add_skill(self, skill):
        self.skills.append(skill)


class Workshop:
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []

    def add_participant(self, member):
        if isinstance(member, Student):
            self.students.append(member)
        elif isinstance(member, Instructor):
            self.instructors.append(member)
        else:
            raise TypeError("Invalid participant type!")

    def print_details(self):
        print(f"Date: {self.date}")
        print(f"Subject: {self.subject}")
        print("Students:")
        for student in self.students:
            student.introduce()
        print("Instructors:")
        for instructor in self.instructors:
            instructor.introduce()
            if instructor.skills:
                print(f"Skills: {', '.join(instructor.skills)}")


workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("Javascript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()