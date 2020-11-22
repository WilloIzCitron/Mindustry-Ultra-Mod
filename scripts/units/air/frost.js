const GlacierAirT1 = extendContent(UnitType, "frost", {});
GlacierAirT1.ammotype = AmmoTypes.copper;
GlacierAirT1.constructor = () => extend(UnitEntity, {});
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(GlacierAirT1, 60 * 15, ItemStack.with(Items.silicon, 45, Items.lead, 20, Items.metaglass, 25)));