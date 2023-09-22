i = 0
j = 0
add = []
n = int(input())
while i < n:
  add.append(list(map(int, input().split())))
  i += 1

for i in add:
  print(i[0] + i[1])