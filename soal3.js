function balanced_bracket(input) {
  let is_balanced = "YES";

  let current_open_token = [];
  expected_token = "";
  for (const token of input) {
    let not_token = false;

    switch (token) {
      case "(":
        current_open_token.push(token);
        expected_token = ")";
        break;
      case "{":
        current_open_token.push(token);
        expected_token = "}";
        break;
      case "[":
        current_open_token.push(token);
        expected_token = "]";
        break;
      case ")":
        if (expected_token != token) {
          not_token = true;
        }
        current_open_token.pop();
        if (current_open_token.length == 0) {
          break;
        }
        expected_token = return_reverse_token(
          current_open_token[current_open_token.length - 1]
        );

        break;
      case "]":
        if (expected_token != token) {
          not_token = true;
        }
        current_open_token.pop();
        if (current_open_token.length == 0) {
          break;
        }
        expected_token = return_reverse_token(
          current_open_token[current_open_token.length - 1]
        );
        break;
      case "}":
        if (expected_token != token) {
          not_token = true;
        }
        current_open_token.pop();
        if (current_open_token.length == 0) {
          break;
        }
        expected_token = return_reverse_token(
          current_open_token[current_open_token.length - 1]
        );
        break;
    }
    if (not_token) {
      is_balanced = "NO";
      break;
    }
  }

  if (current_open_token != 0) {
    is_balanced = "NO";
  }
  return is_balanced;
}

function return_reverse_token(current_token) {
  switch (current_token) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    default:
      throw new Error(`ERROR: UNDEFINED ${current_token}`);
  }
}

console.log(balanced_bracket("{[()]}"));
console.log(balanced_bracket("{[(])}"));
console.log(balanced_bracket("{(([])[])[]}"));
console.log(balanced_bracket("{(([])[])[]"));
