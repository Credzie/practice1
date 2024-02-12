cList = [1, 2, 3, 4, 5, 12, 13, 14, 15, 20, 21]
dList = [6, 7, 8, 9, 10, 4, 5, 12, 13, 14, 30]

commonNums = [cList[i] for i in range(len(cList)) if cList[i] in dList]
print(commonNums)

commonNums.sort

print(commonNums)

commonNums.sort(reverse=True)

print(commonNums)


print(f"The common numbers in both list c and d using list comprehension:\n{commonNums}\n")


x = ["Scotland", "Ireland", "England", "Wales", "Brazil", "Argentina"]
y = ["Scotland", "Spain", "England", "Portugal", "Brazil", "Columbia"]

commonNames = [x[i] for i in range(len(x)) if x[i] in y]

print(commonNames)