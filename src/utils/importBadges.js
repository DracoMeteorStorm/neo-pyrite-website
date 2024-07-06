function importAll(r) {
    let badges = {};
    r.keys().forEach((item, index) => {
      badges[item.replace('./', '')] = r(item);
    });
    return badges;
  }
  
  const badges = importAll(require.context('../assets/badges', false, /\.png$/));
  
  export default badges;
  