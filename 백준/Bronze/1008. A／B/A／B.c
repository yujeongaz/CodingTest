#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS

int main() {
  int a, b;

  scanf("%d %d", &a, &b);
  printf("%.9lf", (double)a / b);

  return 0;
}