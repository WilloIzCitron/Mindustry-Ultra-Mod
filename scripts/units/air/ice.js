const GlacierAirT3 = extendContent(UnitType, "ice", {});
GlacierAirT3.ammotype = AmmoTypes.copper;
GlacierAirT3.constructor = () => extend(UnitEntity, {});

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "mindustry_ultra_mod-snow"), Vars.content.getByName(ContentType.unit, "mindustry_ultra_mod-ice")]);
Blocks.multiplicativeReconstructor.upgrades.add(upgrade.toArray(UnitType));