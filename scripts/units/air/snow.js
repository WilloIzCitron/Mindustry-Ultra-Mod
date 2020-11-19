const GlacierAirT2 = extendContent(UnitType, "snow", {});
GlacierAirT2.ammotype = AmmoTypes.copper;
GlacierAirT2.constructor = () => extend(UnitEntity, {});

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "frost"), Vars.content.getByName(ContentType.unit, "snow")]);
Blocks.additiveReconstructor.upgrades.add(upgrade.toArray(UnitType));