import Vue from 'vue';

function ellipsisFilter(input, maxOfCharacters = 50) {
  if (input.length <= maxOfCharacters) {
    return input;
  }

  return `${input.substr(0, maxOfCharacters)}...`;
}

export default Vue.filter('ellipsis', ellipsisFilter);
