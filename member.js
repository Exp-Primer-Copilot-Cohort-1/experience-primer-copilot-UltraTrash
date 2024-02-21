function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/member/skills-member.html',
    scope: {
      skills: '='
    },
    link: function (scope, element, attrs) {
      scope.skills = scope.skills || [];
    }
  };
}