import sys
from phishing import *
import requests
class test:
    def __init__(self,data):
        self.url=data
        self.output=""

    def callPhishing(self):
        objphishing=phishing(self.url)
        objphishing.resultRandomForest()
        objphishing.resultDecisionTree()
        objphishing.resultLogisticRegression()
        return objphishing.result()
    

def main():
    mainVal=0
    url=str(sys.argv[1])
    urlD = requests.utils.unquote(url)
    objTest = test(urlD)
  
    if objTest.callPhishing()=="Phishing":
        mainVal=mainVal+10

    if mainVal==0:
        print("Secure!")
    elif mainVal==10:
        print("Vulnerable to Phishing")
    elif mainVal==11:
        print("Vulnerable  Phishing")
    elif mainVal==12:
        print("Vulnerable  Phishing")
    elif mainVal==13:
        print("Vulnerable Phishing")
    elif mainVal==15:
        print("Vulnerable to C Phishing")
    elif mainVal==16:
        print("Vulnerable to  Phishing")
    elif mainVal==17:
        print("Vulnerable to  Phishing")
    elif mainVal==18:
        print("Vulnerable to  Phishing")
    else:
        print("Prediction failed")

if __name__ == "__main__":
    main()