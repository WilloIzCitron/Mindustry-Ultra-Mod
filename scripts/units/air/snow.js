const GlacierAirT2 = extendContent(UnitType, "snow", {});
GlacierAirT2.ammotype = AmmoTypes.copper;
GlacierAirT2.constructor = () => extend(UnitEntity, {});

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "mindustry_ultra_mod-frost"), Vars.content.getByName(ContentType.unit, "mindustry_ultra_mod-snow")]);
Blocks.additiveReconstructor.upgrades.add(upgrade.toArray(UnitType));