export const colorVariantConverter = (type) => {
    const colorMap = new Map([
        ["bug", "#A8B820"],
        ["dark", "#705848"],
        ["dragon", "#7038F8"],
        ["electric", "#F8D030"],
        ["fairy", "#EE99AC"],
        ["fire", "#F08030"],
        ["fighting", "#C03028"],
        ["flying", "#A890F0"],
        ["ghost", "#705898"],
        ["grass", "#78C850"],
        ["ground", "#E0C068"],
        ["ice", "#98D8D8"],
        ["normal", "#A8A878"],
        ["poison", "#A040A0"],
        ["psychic", "#F85888"],
        ["rock", "#B8A038"],
        ["steel", "#B8B8D0"],
        ["water", "#6890F0"],
    ]);

    return colorMap.get(type) || "#000000";
};
