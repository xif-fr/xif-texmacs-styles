(kbd-map
  (:mode in-math?)

  ("@ space" (math-insert '(separating-space "0.2em")))
  ("@ space space" (math-insert '(separating-space "0.4em")))
  ("@ space space space" (math-insert '(separating-space "0.6em")))
  ("@ space space space space" (math-insert '(separating-space "0.8em")))
  ("@ space space space space space" (math-insert '(separating-space "1.0em")))
  ("c c" (make-with "math-condensed" "true"))
  ("g g" (make-rigid))
)