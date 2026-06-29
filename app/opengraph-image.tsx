import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "Bright Smile Dental Clinic — Premium Dental Care in Lahore";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:      "100%",
          height:     "100%",
          display:    "flex",
          flexDirection: "column",
          alignItems:    "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0C4A6E 0%, #1E40AF 50%, #0E7490 100%)",
          fontFamily: "system-ui, sans-serif",
          position:   "relative",
        }}
      >
        {/* Grid dots */}
        <div
          style={{
            position:        "absolute",
            inset:           0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize:  "32px 32px",
          }}
        />

        {/* Tooth icon */}
        <div
          style={{
            width:         80,
            height:        80,
            borderRadius:  20,
            background:    "rgba(255,255,255,0.15)",
            display:       "flex",
            alignItems:    "center",
            justifyContent: "center",
            marginBottom:  24,
            fontSize:      48,
          }}
        >
          🦷
        </div>

        {/* Clinic name */}
        <div
          style={{
            fontSize:    64,
            fontWeight:  800,
            color:       "white",
            marginBottom: 12,
            textAlign:   "center",
            lineHeight:  1.1,
          }}
        >
          Bright Smile
        </div>

        <div
          style={{
            fontSize:    28,
            fontWeight:  500,
            color:       "rgba(186,230,253,0.9)",
            marginBottom: 32,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Dental Clinic
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize:    22,
            color:       "rgba(255,255,255,0.75)",
            marginBottom: 40,
          }}
        >
          Premium Dental Care in Lahore, Pakistan
        </div>

        {/* Stats row */}
        <div
          style={{
            display:    "flex",
            gap:        48,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding:    "20px 40px",
          }}
        >
          {[
            { value: "12+",    label: "Years"    },
            { value: "8,500+", label: "Patients" },
            { value: "15+",    label: "Doctors"  },
            { value: "99%",    label: "Rated"    },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display:       "flex",
                flexDirection: "column",
                alignItems:    "center",
                gap:           4,
              }}
            >
              <span style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                {s.value}
              </span>
              <span style={{ fontSize: 14, color: "rgba(186,230,253,0.8)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}