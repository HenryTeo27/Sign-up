const countryList = Object.keys(svgCountryFlags);

const countrySelect = document.querySelector('select[id="country"]');
countryList.forEach(countryCode => {
  const option = document.createElement('option');
  option.value = countryCode;
  option.text = `${svgCountryFlags[countryCode]} ${countryCode}`;
  countrySelect.add(option);
});

countrySelect.addEventListener('change', function() {
  const selectedCountryCode = this.value;
  console.log(selectedCountryCode);
});
