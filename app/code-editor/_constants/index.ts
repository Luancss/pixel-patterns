import { Monaco } from "@monaco-editor/react";
import { Theme } from "@/types";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  html: {
    id: "html",
    label: "HTML",
    logoPath: "/html.png",
    pistonRuntime: { language: "html", version: "5.0.0" },
    monacoLanguage: "html",
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Login-Signup Form</title>
  <link rel="stylesheet" href="style.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #081b29;
    }

    .wrapper {
      position: relative;
      width: 750px;
      height: 450px;
      background: transparent;
      border: 2px solid #0ef;
      overflow: hidden;
      box-shadow: 0 0 25px #0ef;
    }

    .wrapper .form-box {
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .wrapper .form-box.login {
      left: 0;
      padding: 0px 60px 0 40px;
    }

    .wrapper .form-box.login .animation {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
      transition: .7s ease;
      transition-delay: calc(.1s * var(--j));
    }

    .wrapper.active .form-box.login .animation {
      transform: translateX(-120%);
      opacity: 0;
      filter: blur(10px);
      transition-delay: calc(.1s * var(--i));
    }

    .wrapper .form-box.register {
      right: 0;
      padding: 0px 40px 0px 60px;
      pointer-events: none;
    }

    .wrapper.active .form-box.register {
      pointer-events: auto;
    }

    .wrapper .form-box.register .animation {
      transform: translateX(120%);
      opacity: 0;
      filter: blur(10px);
      transition: .7s ease;
    }

    .wrapper.active .form-box.register .animation {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
      transition-delay: calc(.1s * var(--i));
    }

    .form-box h2 {
      font-size: 32px;
      color: #fff;
      text-align: center;
    }

    .form-box .input-box {
      position: relative;
      width: 100%;
      height: 50px;
      margin: 25px 0;
    }

    .input-box input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 2px solid #fff;
      padding-right: 23px;
      font-size: 16px;
      color: #fff;
      font-weight: 500;
      transition: .5s;
    }

    .input-box input:focus,
    .input-box input:valid {
      border-bottom-color: #0ef;
    }

    .input-box label {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: .5s;
    }

    .input-box input:focus~label,
    .input-box input:valid~label {
      top: -5px;
      color: #0ef;
    }

    .input-box i {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: 18px;
      color: #fff;
      transition: .5s;
    }

    .input-box input:focus~i,
    .input-box input:valid~i {
      color: #0ef;
    }

    .btn {
      position: relative;
      width: 100%;
      height: 45px;
      background: transparent;
      border: 2px solid #0ef;
      outline: none;
      border-radius: 40px;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      z-index: 1;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 300%;
      background: linear-gradient(#081b29, #0ef, #081b29, #0ef);
      z-index: -1;
      transition: .5s;
    }

    .btn:hover::before {
      top: 0;
    }

    .form-box .logreg-link {
      font-size: 14.5px;
      color: #fff;
      text-align: center;
      margin: 20px 0px 10px;
    }

    .logreg-link p a {
      color: #0ef;
      text-decoration: none;
      font-weight: 600;
    }

    .logreg-link p a:hover {
      text-decoration: underline;
    }

    .wrapper .info-text {
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .wrapper .info-text.login {
      right: 0;
      text-align: right;
      padding: 0px 40px 60px 150px;
    }

    .wrapper .info-text.login .animation {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
      transition: .7s ease;
      transition-delay: calc(.1s * var(--j));
    }

    .wrapper.active .info-text.login .animation {
      transform: translateX(120%);
      opacity: 0;
      filter: blur(10px);
      transition-delay: calc(.1s * var(--i));
    }

    .wrapper .info-text.register {
      left: 0;
      text-align: left;
      padding: 0px 150px 60px 40px;
      pointer-events: none;
    }

    .wrapper.active .info-text.register {
      pointer-events: auto;
    }

    .wrapper .info-text.register .animation {
      transform: translateX(-120%);
      opacity: 0;
      filter: blur(10px);
      transition: .7s ease;
      transition-delay: calc(.1s * var(--j));
    }

    .wrapper.active .info-text.register .animation {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
      transition-delay: calc(.1s * var(--i));
    }

    .info-text h2 {
      font-size: 36px;
      color: #fff;
      line-height: 1.3;
      text-transform: uppercase;
    }

    .info-text p {
      font-size: 16px;
      color: #fff;
    }

    .wrapper .bg-animate {
      position: absolute;
      top: 0;
      right: 0;
      width: 850px;
      height: 600px;
      background: linear-gradient(45deg, #081b29, #0ef);
      border-bottom: 3px solid #0ef;
      transform: rotate(10deg) skewY(40deg);
      transform-origin: bottom right;
      transition: 1.5s ease;
      transition-delay: 1.6s;
    }

    .wrapper.active .bg-animate {
      transform: rotate(0) skewY(0);
      transition-delay: .5s;
    }

    .wrapper .bg-animate2 {
      position: absolute;
      top: 100%;
      left: 250px;
      width: 850px;
      height: 700px;
      background: #081b29;
      border-top: 3px solid #0ef;
      transform: rotate(0) skewY(0);
      transform-origin: bottom left;
      transition: 1.5s ease;
      transition-delay: .5s;
    }

    .wrapper.active .bg-animate2 {
      transform: rotate(-11deg) skewY(-41deg);
      transition-delay: 1.2s;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <span class="bg-animate"></span>
    <span class="bg-animate2"></span>

    <div class="form-box login">
      <h2 class="animation" style="--i:0; --j:21;">Login</h2>
      <form action="#">
        <div class="input-box animation" style="--i:1; --j:22;">
          <input type="text" required>
          <label>Username</label>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box animation" style="--i:2; --j:23;">
          <input type="password" required>
          <label>Password</label>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <button class="btn animation" type="submit" style="--i:3; --j:24;">Login</button>
        <div class="logreg-link animation" style="--i:4; --j:25;">
          <p>Don't have an account? <br> <a href="#" class="register-link">Sign up</a></p>
        </div>
      </form>
    </div>

    <div class="info-text login">
      <h2 class="animation" style="--i:0; --j:20;">Welcome back!</h2>
      <p class="animation" style="--i:1; --j:21;">
        We're happy to have you with us back again! If you need anything, we're here to help
      </p>
    </div>

    <div class="form-box register">
      <h2 class="animation" style="--i:17; --j:0;">Sign up</h2>
      <form action="#">
        <div class="input-box animation" style="--i:18; --j:1;">
          <input type="text" required>
          <label>Username</label>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box animation" style="--i:19; --j:2;">
          <input type="text" required>
          <label>Email</label>
          <i class='bx bxs-envelope'></i>
        </div>
        <div class="input-box animation" style="--i:20; --j:3;">
          <input type="password" required>
          <label>Password</label>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <button class="btn animation" type="submit" style="--i:21; --j:4;">Register</button>
        <div class="logreg-link animation" style="--i:22; --j:5;">
          <p>Already have an account? <br> <a href="#" class="login-link">Login</a></p>
        </div>
      </form>
    </div>

    <div class="info-text register">
      <h2 class="animation" style="--i:17; --j:0;">Join us today!</h2>
      <p class="animation" style="--i:18; --j:1;">
        Sign up and get access to exclusive features and benefits tailored for you!
      </p>
    </div>
  </div>
</body>
</html>
`,
  },
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}

class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}

  sum(): number {
    return this.numbers.reduce((acc, curr) => acc + curr, 0);
  }

  squares(): number[] {
    return this.numbers.map(n => n * n);
  }

  evenNumbers(): number[] {
    return this.numbers.filter(n => n % 2 === 0);
  }
}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")

# Filter for even numbers
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      // Create array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Print original numbers
      System.out.print("Original numbers: ");
      printArray(numbers);
      
      // Calculate and print squares
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          squares[i] = numbers[i] * numbers[i];
      }
      System.out.print("Squared numbers: ");
      printArray(squares);
      
      // Print even numbers
      System.out.print("Even numbers: ");
      for (int n : numbers) {
          if (n % 2 == 0) System.out.print(n + " ");
      }
      System.out.println();
      
      // Calculate and print sum
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
  
  private static void printArray(int[] arr) {
      for (int n : arr) System.out.print(n + " ");
      System.out.println();
  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {
  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers:", numbers)
  
  // Calculate squares
  squares := make([]int, len(numbers))
  for i, n := range numbers {
      squares[i] = n * n
  }
  fmt.Println("Squared numbers:", squares)
  
  // Filter even numbers
  var evenNumbers []int
  for _, n := range numbers {
      if n%2 == 0 {
          evenNumbers = append(evenNumbers, n)
      }
  }
  fmt.Println("Even numbers:", evenNumbers)
  
  // Calculate sum
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  fmt.Println("Sum of numbers:", sum)
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    // Create vector
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Print original numbers
    println!("Original numbers: {:?}", numbers);
    
    // Calculate squares
    let squares: Vec<i32> = numbers
        .iter()
        .map(|&n| n * n)
        .collect();
    println!("Squared numbers: {:?}", squares);
    
    // Filter even numbers
    let even_numbers: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .cloned()
        .collect();
    println!("Even numbers: {:?}", even_numbers);
    
    // Calculate sum
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    
    // Calculate squares
    std::vector<int> squares;
    std::transform(numbers.begin(), numbers.end(), 
                  std::back_inserter(squares),
                  [](int n) { return n * n; });
    
    std::cout << "Squared numbers: ";
    for (int n : squares) std::cout << n << " ";
    std::cout << std::endl;
    
    // Filter even numbers
    std::cout << "Even numbers: ";
    for (int n : numbers) {
        if (n % 2 == 0) std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Calculate sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        // Create array
        int[] numbers = { 1, 2, 3, 4, 5 };
        
        // Print original numbers
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        
        // Calculate squares
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        
        // Filter even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        
        // Calculate sum
        var sum = numbers.Sum();
        Console.WriteLine($"Sum of numbers: {sum}");
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers: #{numbers.join(' ')}"

# Calculate squares
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"

# Filter even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers: #{sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers: \\(numbers)")

// Calculate squares
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")

// Filter even numbers
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

export const THEME_DEFINITONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base as any,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};
