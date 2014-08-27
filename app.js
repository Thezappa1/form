/**
 * AngularJS module to process a form.
 */
angular.module('myApp', ['ajoslin.promise-tracker'])
  .controller('help', function ($scope, $http, $log, promiseTracker, $timeout) {
   
	$scope.locationOptions = {
         'ard Na Greine': 'Ard Na Greine',
		'artane': 'Artane',
		'ashington': 'Ashington',
		'ashtown': 'Ashtown',
		'ayrfield': 'Ayrfield',
		'balbriggan': 'Balbriggan',
		'baldonnell': 'Baldonnell',
		'baldoyle': 'Baldoyle',
		'balgriffin': 'Balgriffin',
		'ballinteer': 'Ballinteer',
		'ballsbridge': 'Ballsbridge',
		'ballyboden': 'Ballyboden',
		'ballybough': 'Ballybough',
		'ballyboughal': 'Ballyboughal',
		'ballybrack': 'Ballybrack',
		'ballycullen': 'Ballycullen', 
		'ballyfermot': 'Ballyfermot',
		'ballymount': 'Ballymount',
		'ballymun': 'Ballymun',
		'balrothery': 'Balrothery',
		'beaumont': 'Beaumont',
		'blackrock': 'Blackrock',
		'blanchardstown': 'Blanchardstown',
		'bluebell': 'Bluebell',
		'booterstown': 'Booterstown',
		'bray': 'Bray',
		'brittas': 'Brittas',
		'cabinteely': 'Cabinteely',
		'cabra': 'Cabra',
		'carpenterstown': 'Carpenterstown',
		'carrickmines': 'Carrickmines',
		'castleknock': 'Castleknock',
		'chapelizod': 'Chapelizod',
		'cherry Orchard': 'Cherry Orchard',
		'christchurch': 'Christchurch',
		'churchtown': 'Churchtown',
		'citywest': 'Citywest',
		'clarehall': 'Clarehall',
		'clondalkin': 'Clondalkin',
		'clonee': 'Clonee',
		'clongriffin': 'Clongriffin',
		'clonshaugh': 'Clonshaugh',
		'clonsilla': 'Clonsilla',
		'clonskeagh': 'Clonskeagh',
		'clontarf': 'Clontarf',
		'coolmine': 'Coolmine',
		'coolock': 'Coolock',
		'crumlin': 'Crumlin',
		'dalkey': 'Dalkey',
		'darndale': 'Darndale',
		'dartry': 'Dartry',
		'deans Grange': 'Deans Grange',
		'delgany': 'Delgany',
		'donabate': 'Donabate',
		'donaghmede': 'Donaghmede',
		'donnybrook': 'Donnybrook',
		'donnycarney': 'Donnycarney',
		'drimnagh': 'Drimnagh',
		'drumcondra': 'Drumcondra',
		'dun Laoghaire': 'Dun Laoghaire',
		'dundrum': 'Dundrum',
		'east Wall': 'East Wall',
		'edenmore': 'Edenmore',
		'enniskerry': 'Enniskerry',
		'fairview': 'Fairview',
		'finglas': 'Finglas',
		'firhouse': 'Firhouse',
		'foxrock': 'Foxrock',
		'garristown': 'Garristown',
		'glasnevin': 'Glasnevin',
		'glasthule': 'Glasthule',
		'glenageary': 'Glenageary',
		'goatstown': 'Goatstown',
		'grand Canal Dock': 'Grand Canal Dock',
		'greenhills': 'Greenhills',
		'greystones': 'Greystones',
		'harolds Cross': 'Harolds Cross',
		'hartstown': 'Hartstown',
		'hollystown': 'Hollystown',
		'howth': 'Howth',
		'huntstown': 'Huntstown',
		'iFSc': 'IFSc',
		'inchicore': 'Inchicore',
		'irishtown': 'Irishtown',
		'islandbridge': 'Islandbridge',
		'kilbarrack': 'Kilbarrack',
		'killester': 'Killester',
		'killiney': 'Killiney',
		'kilmacanogue': 'Kilmacanogue',
		'kilmacud': 'Kilmacud',
		'kilmainham': 'Kilmainham',
		'kilmore': 'Kilmore',
		'kilnamanagh': 'Kilnamanagh',
		'kilsallaghan': 'Kilsallaghan',
		'kilshane Cross': 'Kilshane Cross',
		'kilternan': 'Kilternan',
		'kiltipper': 'Kiltipper',
		'kimmage': 'Kimmage',
		'kingswood': 'Kingswood',
		'kinsealy': 'Kinsealy',
		'knocklyon': 'Knocklyon',
		'leopardstown': 'Leopardstown',
		'loughlinstown': 'Loughlinstown',
		'loughshinny': 'Loughshinny',
		'lucan': 'Lucan',
		'lusk': 'Lusk',
		'malahide': 'Malahide',
		'marino': 'Marino',
		'milltown': 'Milltown',
		'monkstown': 'Monkstown',
		'mount Merrion': 'Mount Merrion',
		'mulhuddart': 'Mulhuddart',
		'naul': 'Naul',
		'navan Road': 'Navan Road',
		'newcastle': 'Newcastle',
		'newtownmountkennedy': 'Newtownmountkennedy',
		'north Circular Road': 'North Circular Road',
		'north Strand': 'North Strand',
		'north Wall': 'North Wall',
		'oldtown': 'Oldtown',
		'ongar': 'Ongar',
		'palmerstown': 'Palmerstown',
		'park West': 'Park West',
		'perrystown': 'Perrystown',
		'phibsborough': 'Phibsborough',
		'poppintree': 'Poppintree',
		'portmarnock': 'Portmarnock',
		'portobello': 'Portobello',
		'raheny': 'Raheny',
		'ranelagh': 'Ranelagh',
		'rathcoole': 'Rathcoole',
		'rathfarnham': 'Rathfarnham',
		'rathgar': 'Rathgar',
		'rathmichael': 'Rathmichael',
		'rathmines': 'Rathmines',
		'rialto': 'Rialto',
		'ringsend': 'Ringsend',
		'rush': 'Rush',
		'saggart': 'Saggart',
		'saint Margarets': 'Saint Margarets',
		'sallynoggin': 'Sallynoggin',
		'sandycove': 'Sandycove',
		'sandyford': 'Sandyford',
		'sandymount': 'Sandymount',
		'santry': 'Santry',
		'shankill': 'Shankill',
		'skerries': 'Skerries',
		'smithfield': 'Smithfield',
		'south Circular Road': 'South Circular Road', 
		'stepaside': 'Stepaside',
		'stillorgan': 'Stillorgan',
		'stoneybatter': 'Stoneybatter',
		'sutton': 'Sutton',
		'swords': 'Swords',
		'tallaght': 'Tallaght',
		'temple Bar': 'Temple Bar',
		'templeogue': 'Templeogue',
		'terenure': 'Terenure',
		'the Coombe': 'The Coombe',
		'tyrrelstown': 'Tyrrelstown',
		'walkinstown': 'Walkinstown',
		'ward': 'Ward',
		'whitehall': 'Whitehall'
    };
	
	 $scope.stageOptions = {
      'leaving certificate': 'Leaving Certificate',
      'junior certificate': 'Junior Certificate'
    };
	
	 $scope.levelOptions = {
      'ordinary': 'Ordinary',
      'honours': 'Honours'
    };
	
	$scope.startdayOptions = {
      '1monday': 'Monday',
      '2tuesday': 'Tuesday',
	  '3wedsnesday': 'Wednesday',
	  '4thursday': 'Thursday',
	  '5friday': 'Friday',
	  '6saturday': 'Saturday',
	  '7sunday': 'Sunday'
    };
	
	$scope.starttimeOptions = {
      '7am': '7am',
      '7.30am': '7.30am',
	  '8am': '8am',
	  '8.30am': '8.30am',
	  '9am': '9am',
	  '9.30am': '9.30am',
	  '10am': '10am',
	  '10.30am': '10.30am',
	  '11am': '11am',
	  '11.30am': '11.30am',
	  '12am': '12am',
	  '12.30am': '12.30am',
	  '1pm': '1pm',
	  '1.30pm': '1.30pm',
	  '2pm': '2pm',
	  '2.30pm': '2.30pm',
	  '3pm': '3pm',
	  '3.30pm': '3.30pm',
	  '4pm': '4pm',
	  '4.30pm': '4.30pm',
	  '5pm': '5pm',
	  '5.30pm': '5.30pm',
	  '6pm': '6pm',
	  '6.30pm': '6.30pm',
	  '7pm': '7pm',
	  '7.30pm': '7.30pm',
	  '8pm': '8pm',
	  '8.30pm': '8.30pm',
	  '9pm': '9pm'
	  
    };
	
	
	$scope.freqOptions = {
      'daily': 'Daily',
      'weekly': 'Weekly',
	  'forthnightly': 'Forthnightly',
	  'monthly': 'Monthly'
    };
	
	 var app = angular.module("app", ["checklist-model"]);
	app.controller('Ctrl1', function($scope) {
	  $scope.subjects = [
		'maths', 
		'irish', 
		'english', 
		'admin'
	  ];
	  $scope.user = {
		roles: ['user']
	  };
	  $scope.checkAll = function() {
		$scope.user.subjects = angular.copy($scope.subjects);
	  };
	  $scope.uncheckAll = function() {
		$scope.user.subjects = [];
	  };
	  $scope.checkFirst = function() {
		$scope.user.subjects.splice(0, $scope.user.subjects.length); 
		$scope.user.subjects.push('math');
	  };
	});

    // Form submit handler.
    $scope.submit = function(form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }

      // Default values for the request.
      $scope.progress = promiseTracker('progress');
      var config = {
        params : {
          'callback': 'JSON_CALLBACK',
          'firstname': $scope.firstname,
		  'lastname': $scope.lastname,
          'email': $scope.email,
		  'confirmemail': $scope.confirmemail,
		  'location': $scope.location,
		  'stage': $scope.stage,
		  'level': $scope.level,
          'subjectList': $scope.subjectList,
		  'school': $scope.school,
		  'startday': $scope.startday,
		  'starttime': $scope.starttime,
		  'freq': $scope.freq,
          'comments': $scope.comments
        },
        tracker : 'progress'
      };

      // Perform JSONP request.
      $http.jsonp('response.json', config)
        .success(function(data, status, headers, config) {
          if (data.status == 'OK') {
            $scope.firstname = null;
			$scope.lastname = null;
            $scope.email = null;
			$scope.confirmemail = null;
			$scope.location = null;
			$scope.stage = null;
			$scope.level = null;
            $scope.subjectList = null;
			$scope.school = null;
			$scope.startday = null;
			$scope.starttime = null;
			$scope.freq = null;
            $scope.messages = 'Your form has been sent!';
            $scope.submitted = false;
          } else {
            $scope.messages = 'Oops, we received your request, but there was an error processing it.';
            $log.error(data);
          }
        })
        .error(function(data, status, headers, config) {
          $scope.progress = data;
          $scope.messages = 'There was a network error. Try again later.';
          $log.error(data);
        });

      // Hide the status message which was set above after 3 seconds.
      $timeout(function() {
        $scope.messages = null;
      }, 3000);
    };
  });
