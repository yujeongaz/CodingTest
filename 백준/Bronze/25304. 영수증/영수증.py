i = 0
arr = []
sum = 0

result = int(input())
n = int(input())
while i < n:
  a = list(map(int, input().split()))
  arr.append(a)
  i += 1

i = 0
while i < n:
  sum += arr[i][0] * arr[i][1]
  i += 1

if result == sum:
  print("Yes")
else:
  print("No")