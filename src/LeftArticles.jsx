import Collapsible from 'react-collapsible';

function LeftArticles() {

const weapons = [
    {
        name: "CB-9 Exploding Crossbow",
        changes: [
            "Slightly smaller explosion",
            "Increased stagger",
            "Decreased number of maximum mags from 12 to 8",
            "Increased number of magazines received from resupply from 6 to 8",
            "Slight reduction in ergonomics",
            "Muzzle velocity increased"
        ]
    },
    {
        name: "LAS-99 Quasar Cannon",
        changes: ["Increased recharge time by 5 seconds"]
    },
    {
        name: "BR-14 Adjudicator",
        changes: [
            "Full auto is now the default fire mode",
            "Reduced recoil",
            "Increased maximum mags from 6 to 8",
            "Increased number of magazines received from resupply from 6 to 8",
            "Now placed amongst assault rifles"
        ]
    },
    {
        name: "LAS-98 Laser Cannon",
        changes: [
            "Slightly increased damage",
            "Slightly reduced damage versus large volume bodies"
        ]
    },
    {
        name: "SG-8P Punisher Plasma",
        changes: [
            "Decreased maximum mags from 12 to 8",
            "Increased amount of magazines received from resupply from 6 to 8",
            "Increased projectile speed, but will still keep a similar range",
            "Decreased damage falloff on the explosion",
            "Now placed in the energy weapons category"
        ]
    },
    {
        name: "ARC-12 Blitzer",
        changes: [
            "Increased shots per minute from 30 to 45",
            "Now placed in the energy weapons category"
        ]
    },
    {
        name: "R-36 Eruptor",
        changes: [
            "Decreased number of maximum mags from 12 to 6",
            "Explosion damage drops off slightly faster"
        ]
    },
    {
        name: "LAS-16 Sickle",
        changes: ["Decreased amount of magazines from 6 down to 3"]
    },
    {
        name: "LAS-5 Scythe",
        changes: [
            "Increased damage from 300 to 350",
            "Decreased max number of mags from 6 down to 4"
        ]
    },
    {
        name: "RS-422 Railgun",
        changes: [
            "Increased armor penetration in both safe mode and unsafe mode",
            "Stagger force slightly reduced"
        ]
    },
    {
        name: "MG-101 Heavy Machine Gun",
        changes: ["Third person crosshair enabled"]
    },
    {
        name: "63CS Diligence Counter Sniper",
        changes: [
            "Damage increased from 128 to 140",
            "Ergonomics improved"
        ]
    },
    {
        name: "R-63 Diligence",
        changes: ["Damage increased from 112 to 125"]
    },
    {
        name: "P-19 Redeemer",
        changes: ["Slight increase in recoil"]
    },
    {
        name: "P-2 Peacemaker",
        changes: ["Increased damage from 60 to 75"]
    },
    {
        name: "P-8 Senator",
        changes: [
            "Increased damage from 150 to 175",
            "Speedloader added when reloading on an empty cylinder–speeds up reload on empty considerably"
        ]
    },
    {
        name: "LAS-7 Dagger",
        changes: ["Increased damage from 150 to 200"]
    },
    {
        name: "AR-19 Liberator",
        changes: ["Damage increased from 55 to 60"]
    },
    {
        name: "AR-23C Liberator Concussive",
        changes: ["Damage increased from 55 to 65"]
    },
    {
        name: "JAR-5 Dominator",
        changes: ["Damage decreased from 300 to 275"]
    },
    {
        name: "AX/AR-23 Guard Dog",
        changes: ["Decreased damage by 30%"]
    },
    {
        name: "RL-77 Airburst Rocket Launcher",
        changes: [
            "Airburst Rocket Launcher will no longer detonate when shot near stratagems (HMG turret, Sentries, Resupplies) and other Helldivers",
            "Reduced proximity radius"
        ]
    }
];

const stratagems = [
    {
        name: "A/MG-43 Machinegun Sentry",
        changes: ["Increased health to match other Sentries"]
    },
    {
        name: "A/ARC-3 Tesla Tower",
        changes: ["Increased health by 33%"]
    },
    {
        name: "FAF-14 Spear",
        changes: ["Added reload stage reload after the spent missile had been discarded"]
    },
    {
        name: "RL-77 Airburst Rocket Launcher",
        changes: [
            "Airburst Rocket Launcher will no longer detonate when shot near stratagems (HMG turret, Sentries, Resupplies) and other Helldivers",
            "Reduced proximity radius"
        ]
    }
];
    return (
        <div>
            {weapons.map((weapon, index) => (
                <div key={index}>
                    <Collapsible trigger={weapon.name}>
                    <ul>
                        {weapon.changes.map((change, changeIndex) => (
                            <li key={changeIndex}>{change}</li>
                        ))}
                    </ul>
                    </Collapsible>
                </div>
            ))}
            <hr className="articlesplit" />
            {stratagems.map((stratagem, index) => (
                <div key={index}>
                    <Collapsible trigger={stratagem.name}>
                    <ul>
                        {stratagem.changes.map((change, changeIndex) => (
                            <li key={changeIndex}>{change}</li>
                        ))}
                    </ul>
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default LeftArticles;